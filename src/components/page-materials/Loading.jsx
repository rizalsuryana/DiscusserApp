// import React from 'react';
// import  LoadingBar  from 'react-redux-loading-bar';

// const Loading = () => {
//   return (
//     <div className="loading-discusser">
//       <LoadingBar progressIncrease={1} showFastActions updateTime={100}/>
//     </div>
//   );
// };

// export default Loading;

import React from 'react';
import LoadingBar from 'react-redux-loading-bar';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2000; /* lebih tinggi dari navbar */
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingBar
        progressIncrease={1}
        showFastActions
        updateTime={100}
      />
    </LoadingContainer>
  );
};

export default Loading;
