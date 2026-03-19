interface PostGridCardsProps {
  children: React.ReactNode;
}

export const PostGridCards = ({ children }: PostGridCardsProps) => {
  return (
    <div className="container grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
};
