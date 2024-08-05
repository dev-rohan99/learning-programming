<script setup>

import { reactive } from 'vue';
import { invoiceOne } from "../data/data";

const invoice = reactive({
    logo: "",
    sender: "",
    billTo: "",
    shipTo: "",
    invoiceNo: "",
    poNo: "",
    date: "",
    dueDate: "",
    additionalNote: "",
    items: [
        {
            description: "",
            quantity: "",
            rate: "",
            amount: ""
        }
    ],
    notes: "",
    terms: "",
    tax: "",
    subTotal: "",
    totalAmount: "",
    amountPaid: "",
    balanceDue: ""
});

const addNewItem = () => {
    invoice.items.push({
        description: "",
        quantity: "",
        rate: "",
        amount: ""
    })
}

const getSubTotal = () => {
    let subTotal = 0.00;
    invoice.items.forEach((item, index) => {
        subTotal += item.amount;
    });
    invoice.subTotal = subTotal;
    return subTotal;
}

const getTotal = () => {
    let tax = invoice.subTotal * invoice.tax / 100;
    invoice.totalAmount = invoice.subTotal + tax;
    return invoice.totalAmount;
}

</script>

<template>

    <div class="bg-gray-100 py-6">
        <div class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">

            <div class="flex justify-between items-center mb-6">
                <div class="w-1/4">
                    <label for="logoUp">
                        <div class="border-dashed border-2 border-gray-300 rounded-md h-32 flex items-center justify-center">
                            <span class="text-gray-400">+ Add Your Logo</span>
                        </div>
                    </label>
                    <input type="file" hidden id="logoUp">
                </div>
                <div class="text-right">
                    <h1 class="text-4xl font-bold">INVOICE</h1>
                    <div class="mt-2">
                        <span>#</span>
                        <input v-model="invoice.invoiceNo" type="text" value="165481" class="border-b border-gray-300 focus:outline-none focus:border-gray-500 w-16">
                    </div>
                </div>
            </div>

            <div class="mb-6 grid grid-cols-3 gap-6">
                <div>
                    <label class="block text-gray-700">Who is this from?</label>
                    <input v-model="invoice.sender" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div>
                    <label class="block text-gray-700">Bill To</label>
                    <input v-model="invoice.billTo" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div>
                    <label class="block text-gray-700">Ship To</label>
                    <input v-model="shipTo" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="(optional)">
                </div>
            </div>

            <div class="mb-6 grid grid-cols-3 gap-6">
                <div>
                    <label class="block text-gray-700">Date</label>
                    <input v-model="invoice.date" type="date" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div>
                    <label class="block text-gray-700">Payment Terms</label>
                    <input v-model="invoice.terms" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div>
                    <label class="block text-gray-700">Due Date</label>
                    <input v-model="invoice.dueDate" type="date" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
                <div>
                    <label class="block text-gray-700">PO Number</label>
                    <input v-model="invoice.poNo" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                </div>
            </div>

            <div class="border-t border-b border-gray-300 py-2 mb-6">
                <div class="grid grid-cols-12 gap-2 items-center">
                    <div class="col-span-7">
                        <label class="block text-gray-700">Item</label>
                    </div>
                    <div class="col-span-2 text-right">
                        <label class="block text-gray-700">Quantity</label>
                    </div>
                    <div class="col-span-2 text-right">
                        <label class="block text-gray-700">Rate</label>
                    </div>
                    <div class="col-span-1 text-right">
                        <label class="block text-gray-700">Amount</label>
                    </div>
                </div>
                <div v-for="(item, index) in invoice.items" :key="index" class="grid grid-cols-12 gap-2 items-center mt-2">
                    <div class="col-span-7">
                        <input v-model="item.description" type="text" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Description of item/service...">
                    </div>
                    <div class="col-span-2 text-right">
                        <input v-model="item.quantity" type="number" value="1" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-right">
                    </div>
                    <div class="col-span-2 text-right">
                        <input v-model="item.rate" type="number" value="0" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-right">
                    </div>
                    <div class="col-span-1 text-right">
                        <span>${{ item.amount = item.quantity * item.rate }}</span>
                    </div>
                </div>
                <button @click="addNewItem()" class="mt-4 px-4 py-2 bg-green-500 text-white rounded-md">+ Line Item</button>
            </div>

            <div class="flex justify-between items-start gap-5">

                <div class="w-2/4">
                    <div class="mb-6">
                        <label class="block text-gray-700">Notes</label>
                        <textarea v-model="invoice.notes" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" placeholder="Notes - any relevant information not already covered"></textarea>
                    </div>
                    <div class="mb-6">
                        <label class="block text-gray-700">Terms</label>
                        <textarea v-model="invoice.terms" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50" rows="3" placeholder="Terms and conditions - late fees, payment methods, delivery schedule"></textarea>
                    </div>
                </div>

                <div class="w-2/4">
                    <div class="grid grid-cols-1 ml-6">
                        <div></div>
                        <div>
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-700">Subtotal</span>
                                <span>${{ getSubTotal() }}</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-700">Tax</span>
                                <input v-model="invoice.tax" type="number" value="0" class="border-b border-gray-300 focus:outline-none focus:border-gray-500 w-16 text-right">
                            </div>
                            <div class="flex justify-between mb-2">
                                <button class="text-green-500">+ Discount</button>
                                <button class="text-green-500">+ Shipping</button>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-700 font-bold">Total</span>
                                <span class="font-bold">${{ getTotal() }}</span>
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-700">Amount Paid</span>
                                <input v-model="invoice.amountPaid" type="number" value="0" class="border-b border-gray-300 focus:outline-none focus:border-gray-500 w-16 text-right">
                            </div>
                            <div class="flex justify-between mb-2">
                                <span class="text-gray-700 font-bold">Balance Due</span>
                                <span class="font-bold">$0.00</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <button class="px-4 py-2 bg-green-500 text-white rounded-md">Download</button>
                        <button @click="Object.assign(invoice, invoiceOne)" class="px-4 py-2 bg-green-500 text-white rounded-md ml-3">Load Invoice One</button>
                    </div>
                </div>

            </div>

        </div>
    </div>

</template>

<style scoped>

input, textarea{
    padding: 7px 10px;
}

</style>
