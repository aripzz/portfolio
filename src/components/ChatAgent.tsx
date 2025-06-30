"use client"

import { type JSX, useState } from "react"
import { useChat } from "ai/react"

export default function ChatAgent() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    body: {
      model: "deepseek/deepseek-r1-0528:free",
    },
    onError: (error) => {
      console.error("Chat error:", error)
    },
  })

  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen)
  }

  return (
    <>
      {/* Floating Chat Button - Only visible when chat is closed */}
      {!isChatOpen && (
        <button
          onClick={toggleChat}
          className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50 group"
          aria-label="Open chat"
        >
          <svg
            className="w-6 h-6 group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>

          {/* Notification badge (optional) */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">!</span>
          </div>
        </button>
      )}

      {/* Chat Widget - Only visible when chat is open */}
      {isChatOpen && (
        <div
          id="chatWidget"
          className="chat-container fixed bottom-6 right-6 w-11/12 sm:w-80 bg-white shadow-xl rounded-lg flex flex-col z-50 max-h-[600px]"
        >
          <div
            id="chatHeader"
            className="flex items-center justify-between p-3 bg-blue-600 dark:bg-gray-500 text-white rounded-t-lg cursor-pointer"
          >
            <h3 className="text-lg font-semibold">AI Assistant Chat</h3>
            <button
              id="toggleChatBtn"
              onClick={toggleChat}
              className="text-white focus:outline-none p-1 rounded-full hover:bg-blue-700 transition-colors"
              aria-label="Close chat"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div id="chatBody" className="flex-grow flex flex-col p-4 h-[500px] dark:bg-gray-900">
            <div id="chatMessages" className="chat-messages p-2 flex-grow mb-4 rounded-lg overflow-y-auto">
              <div className="flex justify-start mb-2">
                <div className="bg-blue-500 text-white p-2 rounded-lg max-w-[75%] break-words">
                  Hai! Saya AI Agent Arief. Ada yang bisa saya bantu?
                </div>
              </div>

              {messages.map((message) => {
                const renderContent = (content: string): (string | JSX.Element)[] => {
                  return content.split("**").map((segment: string, index: number) => {
                    if (index % 2 === 1) {
                      return <strong key={index}>{segment}</strong>
                    }
                    return <span key={index}>{segment}</span>
                  })
                }

                return (
                  message.content.length !== 0 && (
                    <div
                      key={message.id}
                      className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} mb-2`}
                    >
                      <div
                        className={`${
                          message.role === "user"
                            ? "bg-emerald-100 text-gray-800 rounded-bl-lg rounded-t-lg rounded-br-sm"
                            : "bg-blue-600 text-white rounded-br-lg rounded-t-lg rounded-bl-sm"
                        } p-3 max-w-[75%] break-words shadow-sm relative`}
                      >
                        {message.role !== "user" ? renderContent(message.content) : message.content}
                      </div>
                    </div>
                  )
                )
              })}

              {isLoading && messages.length > 0 && messages[messages.length - 1].content.length == 0 && (
                <div className="flex items-start space-x-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce-200"></div>
                  <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce-400"></div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="p-2 border-t border-gray-200">
              <div className="flex items-center">
                <input
                  type="text"
                  id="chatInput"
                  placeholder="Type your message..."
                  className="mr-2 flex-grow border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={input}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  id="sendMessageBtn"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  disabled={isLoading}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
