import React from 'react';

const Comment = () => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-4">Comments</h2>
            <div className="mb-4 p-4 border border-gray-300 rounded">
                <p><strong>User1:</strong> This is a comment.</p>
            </div>
            <div className="mb-4 p-4 border border-gray-300 rounded">
                <p><strong>User2:</strong> This is another comment.</p>
            </div>
            <form>
                <div className="mb-4">
          <textarea
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Add a comment..."
              required
          ></textarea>
                </div>
                <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">Add Comment</button>
            </form>
        </div>
    );
};

export default Comment;
