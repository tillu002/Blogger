import { atom } from "recoil";

// export const nameAtom = atom({
//   key: "nameAtom",
//   default: selector({
//     key: "nameSelector",
//     get: async () => {
//       const res = await axios.get(`${BACKEND_URL}/api/v1/user/userDetails`, {
//         headers: {
//           uid: localStorage.getItem("uid"),
//         },
//       });
//       return res.data.name;
//     },
//   }),
// });

// export const userNameSelector = selector({
//   key: "userNameSelector",
//   get: ({ get }) => {
//     const uName = get(nameAtom);
//     return uName;
//   },
// });

// export const userBioAtom = atom({
//   key: "userBioAtom",
//   default: selector({
//     key: "bioSelector",
//     get: async () => {
//       const res = await axios.get(`${BACKEND_URL}/api/v1/user/userDetails`, {
//         headers: {
//           uid: localStorage.getItem("uid"),
//         },
//       });
//       return res.data.bio;
//     },
//   }),
// });

// export const userBioSelector = selector({
//   key: "userBioSelector",
//   get: ({ get }) => {
//     const uBio = get(userBioAtom);
//     return uBio;
//   },
// });

export const userIdAtom = atom({
  key: "userIdAtom",
  default: "",
});

export const publishMessageAtom = atom({
  key: "publishMessageAtom",
  default: "",
});
