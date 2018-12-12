import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'st-cloudinary',
  styleUrl: 'cloudinary.css',
  shadow: true
})
export class Cloudinary {

  @Prop() cloudName: string;
  @Prop() publicId: string;
  @Prop() format: string;

  @Prop() width: string;
  @Prop() height: string;
  @Prop() crop: string = 'fill';

  @Element() element: HTMLElement;

  private getAttributes(): object {
    /**
     * @var unallowedAttributes Attributes to ignore from the img tag element.
     */
    const unallowedAttributes = ['crop', 'format', 'public-id', 'cloud-name']

    const attrs = {}
    Array
      .from(this.element.attributes)
      .forEach((attr) => {
        if (!unallowedAttributes.includes(attr.name)) attrs[attr.name] = attr.value
      })

    return attrs
  }

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

  private getFormat(): string {
    return this.format ? `.${this.format}` : ''
  }

  private getSrc(): string {
    return `https://res.cloudinary.com/${this.cloudName}/image/upload/${this.getTransformations()}/${this.publicId}${this.getFormat()}`
  }

  render() {
    return <picture>
      <img
        src={this.getSrc()}
        {...this.getAttributes()}
      />
    </picture>;
  }
}
