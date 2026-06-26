interface IProps {
  params: Promise<{ slug: string[] }>;
}

// CatchAllSegmentsPage Component
const CatchAllSegmentsPage = async ({ params }: IProps) => {
  const { slug } = await params;

  return (
    <div>
      <h1>
        {slug?.length ? (
          slug?.map((item, i) => <p key={i}>item</p>)
        ) : (
          <p>Docs</p>
        )}
      </h1>
    </div>
  );
};

export default CatchAllSegmentsPage;
