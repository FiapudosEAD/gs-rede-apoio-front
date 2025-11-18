
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export default function StoryBox({ title, likeCount, commentCount }) {
  return (
    <div>
        <h2 className="">{title}</h2>
        <div className="">
            <span className=""> {likeCount}</span>
            <span className=""> {commentCount}</span>
        </div>
        <div className="">
            <span className="">
                <PencilSquareIcon className="h-5 w-5 inline-block mr-2 text-gray-500" aria-hidden="true" />
                <a href="/">Editar</a>
            </span>
        </div>
    </div>
  );
}