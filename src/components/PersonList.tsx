// type PersonListProps = {
//   names: { first: string; last: string }[];
// };
// export const PersonList = ({ names }: PersonListProps) => {
//   return (
//     <div>
//       {names.map((val) => {
//         return (
//           <div key={val.last}>
//             {val.first} {val.last}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

import { Name } from "./Person.types";
type PersonListProps = {
  names: Name[];
};
export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((val) => {
        return (
          <div key={val.last}>
            {val.first} {val.last}
          </div>
        );
      })}
    </div>
  );
};
