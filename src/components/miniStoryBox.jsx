import { HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function MiniStoryBox({ title, likeCount, commentCount, onLike }) {
  return (
    <div className="bg-light-blue p-10 rounded-md gap-6 flex flex-col shadow-md md:p-15 font-bold hover:ease-in-out hover:scale-105 transition-transform duration-200 w-full">
        <h2 className="text-2xl self-start sm:self-auto">{title}</h2>
        <div className="text-blue-accent flex gap-6 items-center self-end sm:self-auto md:justify-end">
            <button 
              className="flex gap-2 items-center hover:text-red-500 cursor-pointer transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                onLike();
              }}
            >
              <HeartIcon className="h-6 w-6" aria-hidden="true" />
              {likeCount}
            </button>
            <span className="flex gap-2 items-center">
              <ChatBubbleLeftIcon className="h-6 w-6" aria-hidden="true" />
              {commentCount}
            </span>
        </div>
    </div>
  );
}