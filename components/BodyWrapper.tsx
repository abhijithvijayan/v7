import * as React from 'react';

const BodyWrapper: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <>
      <div className={"main-container"}>
        <main className={"children"}>{children}</main>
      </div>
    </>
  );
};

export default BodyWrapper;
