import React from 'react';
import MyContainer from '../../components/MyContainer';

const ReviewCard = ({ reView }) => {
    const { user_photoURL, review, userName, user_email } = reView;
  return (
    <MyContainer>
      <div className="relative w-96 bg-linear-to-br from-[#e3f2fd] to-[#bbdefb] rounded-3xl p-10 shadow-2xl overflow-hidden">
        <div className="absolute -top-6 left-6 text-9xl text-[#4fc3f7] opacity-30 select-none font-serif my-10">
          “
        </div>

        <p className="relative text-lg leading-relaxed text-gray-800 mt-8 mb-10">
          {review}
        </p>

        <hr className="border-t border-[#90caf9] opacity-60 mb-8" />

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#00695c] rounded-full">
            <img src={user_photoURL} alt="" />
          </div>
          <div>
            <p className="font-semibold text-[#00695c] text-lg">{userName}</p>
            <p className="text-gray-600 text-sm">{user_email}</p>
          </div>
        </div>
      </div>
    </MyContainer>
  );
};

export default ReviewCard;