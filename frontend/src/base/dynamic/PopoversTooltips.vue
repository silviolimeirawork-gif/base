<template>
    <div class="container">
        <h1 class="mb-5">Popovers & Tooltips</h1>
        <!-- Popover -->
        <Popover>
            <button class="btn btn-danger btn-lg">
                Click for Popover</button>
            <template #content>
            <div>Popover Content Here</div>
            </template>
        </Popover>

        <!-- Simple usage with a prop -->
        <Popper content="This is the popover content 🍿">
            <button>Trigger element</button>
        </Popper>

        <!-- Or with a slot -->
        <Popper>
            <button>Another Trigger</button>
            <template #content>
            <div>
                <strong>Complex content!</strong>
            </div>
            </template>
        </Popper>        

        <Tooltip title="Tooltip test" placement="right" type="light">
            <button>Hover me</button>
        </Tooltip>    

    </div>
</template>


<script>
import { Tooltip } from '@programic/vue3-tooltip';
import Popover from "popover-vue";
import Popper from "vue3-popper";

export default {
  components: {
    Popover,
    Popper,    
  },
};
</script>

