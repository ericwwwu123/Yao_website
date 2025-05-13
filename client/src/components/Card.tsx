interface CardProps {
  number: string;
  title: string;
  content: string;
  colorClass: string;
  delay?: number;
}

const Card = ({ number, title, content, colorClass, delay = 100 }: CardProps) => {
  return (
    <div 
      data-aos="fade-up" 
      data-aos-delay={delay} 
      className="bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-700"
    >
      <div className="flex items-start mb-4">
        <span className={`${colorClass} text-white text-sm font-medium rounded-full w-8 h-8 flex items-center justify-center mr-3`}>
          {number}
        </span>
        <h4 className="text-lg font-semibold text-white">{title}</h4>
      </div>
      <p className="text-slate-300">{content}</p>
    </div>
  );
};

export default Card;
