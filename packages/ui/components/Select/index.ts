import Root from './Select.svelte';
import Option from './Option.svelte';

const Select = (Root as typeof Root & { Option: typeof Option });
Select.Option = Option;

export default Select;
