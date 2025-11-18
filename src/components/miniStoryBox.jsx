import { PencilSquareIcon, HeartIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

export default function MiniStoryBox({ title, likeCount, commentCount }) {
  return (
    <div className="bg-light-blue p-10 rounded-md gap-6 flex flex-col shadow-md md:p-15 font-bold hover:ease-in-out hover:scale-105 transition-transform duration-200">
        <h2 className="text-2xl self-start sm:self-auto">{title}</h2>
        <div className="text-blue-accent flex gap-6 items-center self-end sm:self-auto md:justify-end">
            <span className="flex gap-2 items-center">
              <HeartIcon className="h-5 w-5" aria-hidden="true" />
              {likeCount}
            </span>
            <span className="flex gap-2 items-center">
              <ChatBubbleLeftIcon className="h-5 w-5" aria-hidden="true" />
              {commentCount}
            </span>
        </div>
        {/* <div className="">
            <span className="">
                <PencilSquareIcon className="h-5 w-5 inline-block mr-2" aria-hidden="true" />
                <a href="/">Editar</a>
            </span>
        </div> */}
    </div>
  );
}
