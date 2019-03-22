import * as React from "react";

export interface UnsplashProps {

   /**
   * @name Keyword
   * @default cat
   * @description New random photo with each reload
   * @group Unsplash Photo
   * */
  keyword?: string;
  
  /**
   * @name Photo ID
   * @description Load a specific Unsplash photo
   * @group Unsplash Photo
   * */
  photoId?: string;


   /**
   * @name Width
   * @default 480px
   * @group Sizing & Positioning
   * */
  width?: string;

  /**
   * @name Height
   * @default 320px
   * @group Sizing & Positioning
   * @control ButtonGroup
   * */
  height?: string;

  /**
   * @name Horizontal
   * @default Center
   * @group Sizing & Positioning
   * @control ButtonGroup
   * */
  BackgroundPositionX?: BackgroundPositionX;

  /**
   * @name Vertical
   * @default Center
   * @group Sizing & Positioning
   * @control ButtonGroup
   * */
  BackgroundPositionY?: BackgroundPositionY;
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
 * @name Unsplash Photo
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
      height: props.height,
    }}>
    </div>
  );
};