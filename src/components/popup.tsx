import React from 'react';

import {SwipeablePanel} from 'rn-swipeable-panel';

interface IOrderProps {
  active: boolean;
  children: any;
  onlySmall?: boolean;
  closeHandler(): any;
}

const BottomPopUp = ({active, children, closeHandler}: IOrderProps) => {
  return (
    <>
      <SwipeablePanel
        fullWidth={true}
        isActive={active}
        closeOnTouchOutside={true}
        showCloseButton
        openLarge
        onClose={closeHandler}>
        {children}
      </SwipeablePanel>
    </>
  );
};

export default BottomPopUp;
