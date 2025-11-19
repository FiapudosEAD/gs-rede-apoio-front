import { HeartIcon } from '@heroicons/react/24/outline';

export default function StoryBox({ title, content, likeCount }) {
  return (
    <div className="bg-dark-green text-light-green m-5 p-5 rounded-lg shadow-lg flex flex-col">
        <h1 className="text-2xl font-bold mb-4">
            {title}
        </h1>
        <div className="bg-light-green w-full h-1 rounded-md my-2"></div>
        <div className="my-5 text-xl">
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