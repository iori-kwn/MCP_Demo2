import Card from './Card';

function CardGrid() {
  const cardData = [
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.' },
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.' },
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.' },
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.' },
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.' },
    { title: 'Title', description: 'Body text for whatever you\'d like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.' },
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

      {/* First row */}
      <div className="[flex-flow:wrap] box-border content-between flex gap-12 h-[357px] items-center justify-start p-0 relative shrink-0 w-full">
        {cardData.slice(0, 3).map((card, index) => (
          <Card key={index} title={card.title} description={card.description} layout="vertical" />
        ))}
      </div>

      {/* Second row */}
      <div className="[flex-flow:wrap] box-border content-between flex gap-12 h-[357px] items-center justify-start p-0 relative shrink-0 w-full">
        {cardData.slice(3, 6).map((card, index) => (
          <Card key={index + 3} title={card.title} description={card.description} layout="vertical" />
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
