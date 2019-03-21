import * as React from "react";

export interface UnsplashProps {

   /**
   * @name Keyword
   * @default water
   * @description New random photo with each reload
   * @group Unspash Photo
   * */
  keyword?: string;
  
  /**
   * @name Photo ID
   * @description Load a specific Unsplash photo
   * @group Unspash Photo
   * */
  photoId?: string;


   /**
   * @name Width
   * @default 100vw
   * @group Sizing & Positioning
   * */
  width?: string;

  /**
   * @name Height
   * @default 100vh
   * @group Sizing & Positioning
   * @control ButtonGroup
   * */
  heigth?: string;

  /**
   * @name Horizontal
   * @default center
   * @group Sizing & Positioning
   * @control ButtonGroup
   * */
  BackgroundPositionX?: string;

  /**
   * @name Vertical
   * @default center
   * @group Sizing & Positioning
   * @control ButtonGroup
   * */
  BackgroundPositionY?: string;
}

export enum BackgroundPositionX {
  /** @name Left @icon FlexJustifyStart  */
  PositionXLeft= '0%',
  /** @name Center @icon FlexJustifyCenter  */
  PositionXCenter = '50%',
  /** @name Right @icon FlexJustifyEnd  */
  PositionXRIght = '100%'
}

export enum BackgroundPositionY {
  /** @name Top @icon FlexAlignStart  */
  PositionYTop= '0%',
  /** @name Center @icon FlexAlignCenter  */
  PositionYCenter = '50%',
  /** @name Bottom @icon FlexAlignEnd  */
  PositionYBottom = '100%'
}

/** 
 * @name Unsplash Photos
 * @icon Image
 */
export const Unsplash: React.SFC<UnsplashProps> = props => {
  const url = props.photoId ? `https://source.unsplash.com/${props.photoId}` : `https://source.unsplash.com/featured/?${props.keyword}`;

  return (
    <div style={{
      backgroundImage: 'url(' + url + ')',
      backgroundSize: 'cover',
      backgroundPositionX: props.BackgroundPositionX,
      backgroundPositionY: props.BackgroundPositionY,
      backgroundRepeat: 'no-repeat',
      width: props.width,
      height: props.heigth,
    }}>
    </div>
  );
};