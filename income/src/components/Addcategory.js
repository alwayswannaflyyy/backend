import { MinusIcon } from "@/assets/Minus"
import CustomSelect from "./Select"
import { DownArrow } from "@/assets/Downarrow"
import { PlusIcon } from "@/assets/Circle"




export const AddCat = () => {
    return <div className="relative">
        <div className="self-stretch h-8 px-24  rounded-[20px] w justify-center items-center gap-1 inline-flex cursor-pointer" onClick={() => document.getElementById('my_modal_2').showModal()}>
            <div class="w-14 px-3 py-10 rounded-lg justify-center items-center gap-2 flex">
                <div><PlusIcon/></div>
                <div class="text-gray-800 text-base text-center  font-normal font-['Roboto'] leading-normal ">Add </div>
                <div class="text-gray-800 text-base text-center  font-normal font-['Roboto'] leading-normal ">Category</div>
            </div>
        </div>
        <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-10">✕</button>
                </form>
                <div class="w-[470px] h-[236px] rounded-xl flex-col justify-start items-start inline-flex">
                    <div class="self-stretch px-6 py-5 bg-white border-b border-slate-200 justify-between items-center inline-flex">
                        <div class="text-slate-900 text-xl  font-semibold font-['Roboto'] leading-7">Add Category</div>
                        <div class="w-6 h-6 relative"></div>
                    </div>
                    <div class="self-stretch justify-start items-start inline-flex">
                        <div class="grow shrink basis-0 p-6 bg-white flex-col justify-start items-start gap-5 inline-flex">
                            <div class="self-stretch h-[120px] flex-col justify-start items-start gap-8 flex">
                                <div class="self-stretch justify-start items-start  gap-3 inline-flex relative b">
                                    <div className="relative justify-center items-center  bg-gray-100 rounded-[5px] border-[1px]  border-gray-300 w-14 flex">
                                        <CustomSelect />
                                    </div>
                                    <div class="grow shrink basis-0 rounded-lg flex-col   justify-center items-center inline-flex">
                                        <select placeholder="Find or choose category" class="self-stretch  px-4 py-3 bg-gray-100 rounded-lg border border-gray-300 flex-col justify-center items-start flex">
                                            <option disabled selected>Name</option>
                                            <option>Han Solo</option>
                                            <option>Greedo</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="self-stretch h-10 px-3 bg-green-600 rounded-[20px] justify-center items-center gap-1 inline-flex">
                                    <div class="text-gray-50 text-base font-normal font-['Roboto'] leading-normal">Add </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    </div>
}