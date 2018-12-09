import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'st-cloudinary',
  styleUrl: 'cloudinary.css',
  shadow: true
})
export class Cloudinary {

  @Prop() cloudName: string;
  @Prop() publicId: string;
  @Prop() version: string = "1";

  // Image attributes
  @Prop() alt: string;

  @Prop() width: string;
  @Prop() height: string;
  @Prop() crop: string = 'fill';

  private getTransformations(): string {
    const transformations = {
      w: this.width,
      h: this.height,
      c: this.crop
    }

    return Object.keys(transformations)
      .map(key => {
        return `${key}_${transformations[key]}`
      })
      .join(',')
  }

  private getSrc(): string {
    return `https://res.cloudinary.com/${this.cloudName}/image/upload/${this.getTransformations()}/v${this.version}/${this.publicId}.png`
  }

  render() {
    return <picture>
      <img
        src={this.getSrc()}
        alt={this.alt}
      />
    </picture>;
  }
}
