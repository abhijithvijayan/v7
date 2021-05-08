import * as React from 'react';

type Props = {children: React.ReactNode}

export const CardHeader: React.FC<Props> = ({children}) => {
    return <div className={"card-header"}>{children}</div>;
};

export const CardBody: React.FC<Props> = ({children}) => {
  return (
      <div className={"card-body"}>{children}</div>
  );
};

export const CardFooter: React.FC<Props> = ({children}) => {
  return (
      <div className={"card-footer"}>{children}</div>
  );
};

const Card: React.FC<Props> = ({children}) => {
  return (
      <div className={"card-wrapper"}>
        <div className={"card-content-wrapper"}>
          <div className={"content-wrapper"}>
            <div className={"content"}>
              {children}
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
