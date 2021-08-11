const fs = require('fs'); // file system
const path = require('path');

('https://nodejs.org/dist/latest-v14.x/docs/api/fs.html');

// fs.mkdir(path.join(__dirname, 'notes'), (error) => {
//   if (error) {
//     // throw new Error(error);
//     throw error;
//   }

//   console.log('Папка была создана');
// });

// -----------------------
// fs.writeFile(
//   path.join(__dirname, 'notes', 'my-notes.txt'),
//   'Hello world!',
//   (error) => {
//     if (error) {
//       throw error;
//     }

//     console.log('Файл был создан');

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'my-notes.txt'),
//       ' From append file.',
//       (error) => {
//         if (error) {
//           throw error;
//         }

//         console.log('Файл был изменен');

//         fs.readFile(
//           path.join(__dirname, 'notes', 'my-notes.txt'),
//           'utf-8',
//           (error, data) => {
//             if (error) {
//               throw error;
//             }

//             console.log('data:', data);
//           }
//         );
//       }
//     );
//   }
// );

// fs.readFile(path.join(__dirname, 'notes', 'my-notes.txt'), (error, data) => {
//   if (error) {
//     throw error;
//   }

//   console.log('data:', data);
//   console.log('data:', Buffer.from(data).toString());
// });

// -----------------------
// fs.readFile(
//   path.join(__dirname, 'notes', 'my-notes.txt'),
//   'utf-8',
//   (error, data) => {
//     if (error) {
//       throw error;
//     }

//     console.log('data:', data);
//   }
// );

// -----------------------
fs.rename(
  path.join(__dirname, 'notes', 'my-notes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  (error) => {
    if (error) {
      throw error;
    }
    console.log('Файл переименован');
  }
);
