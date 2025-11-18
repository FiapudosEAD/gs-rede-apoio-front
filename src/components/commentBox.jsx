import { HeartIcon } from '@heroicons/react/24/outline';

export default function StoryBox({ userName, content, likeCount }) {
  return (
    <div>
        <h1>
            {userName}
        </h1>
        <div></div>
        <div>
            {content}
        </div>
        <div>
            <HeartIcon className="h-5 w-5 inline-block mr-2 text-red-500" aria-hidden="true" />
            {likeCount}
        </div>
    </div>

  );
}