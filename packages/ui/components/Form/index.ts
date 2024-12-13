import Index from "./Form.svelte";
import Field from "./Field.svelte";


const Form = (Index as typeof Index & {
    Field: typeof Field
});

Form.Field = Field;

export default Form;
