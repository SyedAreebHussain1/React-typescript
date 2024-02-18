type StatusProps = {
  status: "loading" | "success" | "error";
};
export const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") {
    message = "Loading...";
  } else if (status === "success") {
    message = "Data fetched successfully";
  } else {
    message = "Error fetching data";
  }

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
};
