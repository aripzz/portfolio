"use client";
import React, { JSX, useState } from "react";
import { useChat } from "ai/react";
export default function ChatAgent() {
  const [apiKey] = useState(
    "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"
  );
  const { messages, input, handleInputChange, handleSubmit, isLoading } =
    useChat({
      api: "/api/chat",
      body: {
        apiKey,
        model: "deepseek/deepseek-r1-0528:free",
      },
      onError: (error) => {
        console.error("Chat error:", error);
      },
    });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };
  return (
    <div
      id="chatWidget"
      className="chat-container fixed bottom-0 right-0 w-11/12 sm:w-80 bg-white shadow-xl rounded-lg flex flex-col z-50 hidden-chat"
    >
      <div
        id="chatHeader"
        className="flex items-center justify-between p-3 bg-blue-600 dark:bg-gray-500 text-white rounded-t-lg cursor-pointer"
        onClick={toggleChat}
      >
        <h3 className="text-lg font-semibold">AI Assistant Chat</h3>
        <button
          id="toggleChatBtn"
          onClick={toggleChat}
          className="text-white focus:outline-none p-1 rounded-full hover:bg-blue-700 transition-colors"
        >
          <svg
            id="toggleIcon"
            className="w-6 h-6 transform transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </div>
      <div
        id="chatBody"
        className={`flex-grow flex flex-col p-4 h-[500px] dark:bg-gray-900 ${
          !isChatOpen && "hidden"
        }`}
      >
        <div
          id="chatMessages"
          className={`chat-messages p-2 flex-grow mb-4 rounded-lg  overflow-y-auto`}
        >
          <div className="flex justify-start mb-2">
            <div className="bg-blue-500 text-white p-2 rounded-lg max-w-[75%] break-words">
              Hai! Saya AI Agent Arief. Ada yang bisa saya bantu?
            </div>
          </div>

          {messages.map((message) => {
            const renderContent = (
              content: string
            ): (string | JSX.Element)[] => {
              return content
                .split("**")
                .map((segment: string, index: number) => {
                  if (index % 2 === 1) {
                    return <strong key={index}>{segment}</strong>;
                  }
                  return <span key={index}>{segment}</span>;
                });
            };
            return (
              message.content.length !== 0 && (
                <div
                  key={message.id}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  } mb-2`}
                >
                  <div
                    className={`${
                      message.role === "user"
                        ? "bg-emerald-100 text-gray-800 rounded-bl-lg rounded-t-lg rounded-br-sm"
                        : "bg-blue-600 text-white rounded-br-lg rounded-t-lg rounded-bl-sm"
                    } p-3 max-w-[75%] break-words shadow-sm relative`}
                  >
                    {message.role !== "user"
                      ? renderContent(message.content)
                      : message.content}
                  </div>
                </div>
              )
            );
          })}
          {isLoading &&
            messages.length > 0 &&
            messages[messages.length - 1].content.length == 0 && (
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
