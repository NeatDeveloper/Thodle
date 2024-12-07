import Root from './Section.svelte';
import Block from './Block.svelte';

const Section = (Root as typeof Root & { Block: typeof Block });
Section.Block = Block;

export default Section;
