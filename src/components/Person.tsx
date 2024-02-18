// type PersonProps = {
//   name: {
//     first: string;
//     last: string;
//   };
// };

// export const Person = ({ name }: PersonProps) => {
//   return (
//     <div>
//       <p>
//         {name.first} {name.last}
//       </p>
//     </div>
//   );
// };

// props types and tips
import { PersonProps } from "./Person.types";
export const Person = ({ name }: PersonProps) => {
  return (
    <div>
      <p>
        {name.first} {name.last}
      </p>
    </div>
  );
};
