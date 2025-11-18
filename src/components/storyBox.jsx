
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
                <pencil-square className="" />
                <a href="/">Editar</a>
            </span>
        </div>
    </div>
  );
}