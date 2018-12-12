/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface StCloudinary {
    'alt': string;
    'cloudName': string;
    'crop': string;
    'format': string;
    'height': string;
    'publicId': string;
    'width': string;
  }
  interface StCloudinaryAttributes extends StencilHTMLAttributes {
    'alt'?: string;
    'cloudName'?: string;
    'crop'?: string;
    'format'?: string;
    'height'?: string;
    'publicId'?: string;
    'width'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'StCloudinary': Components.StCloudinary;
  }

  interface StencilIntrinsicElements {
    'st-cloudinary': Components.StCloudinaryAttributes;
  }


  interface HTMLStCloudinaryElement extends Components.StCloudinary, HTMLStencilElement {}
  var HTMLStCloudinaryElement: {
    prototype: HTMLStCloudinaryElement;
    new (): HTMLStCloudinaryElement;
  };

  interface HTMLElementTagNameMap {
    'st-cloudinary': HTMLStCloudinaryElement
  }

  interface ElementTagNameMap {
    'st-cloudinary': HTMLStCloudinaryElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
