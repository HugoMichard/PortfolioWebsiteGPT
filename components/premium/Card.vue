<template>
    <el-card class="box-card mt-5 no-padding-card inline-block stripe-card" :class="{'border-4': is_active, 'border-blue-800': is_active}">
        <h1 class="text-3xl text-center font-bold mb-3 mt-5 capitalize">{{ subscription.name }}</h1>
        <h1 class="text-center items-center flex justify-center mb-5">
            <span class="text-3xl">$ </span>
            <span class="font-bold text-5xl m-2">{{ subscription.price.toFixed(2) }}</span>
            <span class="text-2xl text-slate-500">/month</span>
        </h1>
        <div class="slate-background p-5">
            <div class="grid grid-cols-[60px_auto] items-center" v-for="(value, key) of subscriptionMapping">
                <icon v-if="value === 'memory'" name="ic:outline-close" color="red" size="25"></icon>
                <icon v-else-if="value === 'refresh_frequency'" name="ic:round-check" color="green" size="25"></icon>
                <span v-else-if="Number.isInteger(subscription[value])" class="font-bold ml-1">{{ subscription[value] }}</span>
                <icon v-else-if="subscription[value]" name="ic:round-check" color="green" size="25"></icon>
                <icon v-else name="ic:outline-close" color="red" size="25"></icon>

                <span v-if="value === 'refresh_frequency'" class="text-lg text-slate-500 capitalize">{{ subscription[value] }} {{ key }}</span>
                <span v-else class="text-lg text-slate-500">{{ key }}</span>
            </div>
            <PremiumStripePayment :subscription="props.subscription" :is_active="props.is_active"></PremiumStripePayment>
        </div>
    </el-card>
</template>


<script setup>
const props = defineProps({
    subscription: {
        type: Object,
        required: true
    },
    is_active: {
        type: Boolean,
        required: true
    },
});

const subscriptionMapping  = {
    'AI messages per month': 'nb_message',
    'Specific Questions and Answers': 'nb_qa',
    'Website URLs': 'nb_url',
    'Documents': 'nb_doc',
    'PDF documents': 'has_pdf',
    'CSV documents': 'has_csv',
    'Mb maximum per document': 'max_doc_size',
    'AI conversation memory': 'memory',
    'Website Refresh': 'refresh_frequency',
}
</script>

<style>
.no-padding-card > .el-card__body {
    padding: 0px !important;
}

.slate-background {
    background-color: #F9FAFB;
}

.slate-text {
    color: #F9FAFB;
}
</style>