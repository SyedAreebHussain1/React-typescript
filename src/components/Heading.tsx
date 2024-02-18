type HeadingProps = {
  children: string;
  heading?: string;
};
export const Heading = ({ children, heading }: HeadingProps) => {
  return (
    <div>
      <h1>{heading}</h1>
      <h1> {children}</h1>
    </div>
  );
};
