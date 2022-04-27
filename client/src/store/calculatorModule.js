import axios from "axios";
import constants from "@/constants";

export const calculatorModule = {
    actions: {
        async getResult(context, arr) {
            const token = localStorage.getItem("token")
            const [selectedOption, op1, op2] = arr

            let op2InUrl = ["add", "sub", "div", "mult"].includes(selectedOption)
                ? `&o2=${op2}`
                : ``
            return new Promise((resolve, reject) => {
                axios.get(
                    `${constants.BASE_URL}/api/operations/` +
                    `${selectedOption}?o1=${op1}${op2InUrl}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })

                    .then(res => {
                        console.log(res);
                        resolve(res)
                    })
                    .catch(res => {
                        console.log(res.response);
                        reject(res)
                    })
            })


        },

    },
    namespaced: true
}
