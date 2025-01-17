My Notes


for folder in authUser comments filters isPreload leaderBoards shared threadDetail threads users; do
    echo "// Action file for $folder" > $folder/action.js
    echo "// Reducer file for $folder" > $folder/reducer.js
done


npm install @reduxjs/toolkit
npm install react-redux
npm install react-redux-loading-bar