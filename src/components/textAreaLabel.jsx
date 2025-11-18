export default function TextAreaLabel({ placeholder }) {
    return (
        <textarea
            className="bg-white font-bold text-dark-green text-md p-2 rounded-md 
            shadow-md border-2 border-dark-green resize-none h-40 md:h-60"
            placeholder={placeholder}
        />    
    );
}