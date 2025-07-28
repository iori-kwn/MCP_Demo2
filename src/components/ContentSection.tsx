import Card from './Card';

function ContentSection() {
  const cardData = [
    {
      title: 'Title',
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
      buttonText: 'Action',
    },
    {
      title: 'Title',
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
      buttonText: 'Action',
    },
    {
      title: 'Title',
      description:
        "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.",
      buttonText: 'Action',
    },
  ];

  return (
    <div className="bg-[#ffffff] box-border content-stretch flex flex-col gap-12 items-start justify-start p-[64px] relative shrink-0 w-full">
      <div className="box-border content-stretch flex flex-col gap-2 items-start justify-start leading-[0] not-italic p-0 relative shrink-0 text-left">
        <div className="font-['Inter:Semi_Bold',_sans-serif] font-semibold relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.48px] w-full">
          <p className="block leading-[1.2]">Heading</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center relative shrink-0 text-[#757575] text-[20px] w-full">
          <p className="block leading-[1.2]">Subheading</p>
        </div>
      </div>

      <div className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            layout="horizontal"
          />
        ))}
      </div>
    </div>
  );
}

export default ContentSection;
