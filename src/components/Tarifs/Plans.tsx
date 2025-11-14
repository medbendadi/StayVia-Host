import Link from "next/link";
import Image from "next/image";

interface PlanProps {
    item: {
        title: string,
        subtitle: string,
        price: string,
        type: string,
        features: []
    }
}

const Plan: React.FC<PlanProps> = ({ item }) => {
  const { title, subtitle, price, type, features } = item;

  return (
    <div
      className={`
        relative rounded-2xl border transition-all duration-300 group
        ${type == 'Pro'
          ? // ✅ Middle (highlighted) plan
            " md:scale-110 bg-black/90 text-white border-black/10 shadow-[0_0_10px_rgba(0,0,0,0.5)] hover:-translate-y-1 hover:shadow-3xl bg-gradient-to-b from-[rgba(255,255,255,0.1)] via-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.25)]"
          : // ✅ Other plans
            "bg-white text-black border-black/10 hover:-translate-y-1 hover:shadow-xl"
        }
      `}
    >
      <div className="p-6">
        <h2
          className={`font-medium text-3xl mb-5 ${
            type == 'Pro' ? "text-white" : "text-dark"
          }`}
        >
          { title }
        </h2>
        <p
          className={`text-sm mb-6 ${
            type == 'Pro' ? "text-gray-200" : "text-gray-600"
          }`}
        >
          { subtitle }
        </p>
        <h2
          className={`font-medium text-4xl mb-2 ${
            type == 'Pro' ? "text-primary" : "text-dark"
          }`}
        >
          { price }
        </h2>

        <ul className="space-y-3 mb-6 mt-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className={`mt-0.5 flex-shrink-0 rounded-full p-1 ${
                type == 'Pro' ? "bg-primary" : ""
              }`}>
                <Image
                  src="/images/SVGs/check-ring-round.svg"
                  alt="check"
                  width={20}
                  height={20}
                  className="flex-shrink-0"
                  unoptimized={true}
                />
              </div>
              <span className={`text-sm ${
                type == 'Pro' && index < 2 ? "text-primary font-bold" : 
                type == 'Pro' ? "text-gray-200" : "text-gray-600"
              }`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Plan;
