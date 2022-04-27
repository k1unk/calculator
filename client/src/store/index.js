import {createStore} from "vuex";
import {authModule} from "@/store/authModule";
import {usersModule} from "@/store/usersModule";
import {calculatorModule} from "@/store/calculatorModule";

export default createStore({
    modules: {
        auth: authModule,
        users: usersModule,
        calculator: calculatorModule
    }
})
