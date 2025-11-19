import { HeartIcon } from '@heroicons/react/24/outline';

export default function CommentBox({ userName, content, likeCount }) {
  return (
    <div className="bg-light-blue text-dark-green flex flex-col p-4 rounded-md shadow-md mb-4 gap-2">
        <h1 className="font-bold text-xl m-2">
            {userName}
        </h1>
        <div className="bg-dark-green w-full h-1 rounded-md"></div>
        <div className="my-2 text-lg">
            {content}
        </div>
        <div className="self-end">
          <div className="bg-light-green w-full p-5 h-7 rounded-3xl text-dark-green flex items-center justify-center font-bold gap-2">
              <HeartIcon className="h-5 w-5" aria-hidden="true" />
              {likeCount}
          </div>
        </div>
    </div>

  );
}