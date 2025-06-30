"use client"

import { CusInput } from "@/components/General/CusInput/CusInput"
import { CusSelect } from "@/components/General/CusSelect/CusSelect"
import { Chip } from "@heroui/chip"
import { Button } from "@heroui/button"
import { Icon } from "@iconify/react"

type CounselingFormPropsType = {
    
}

export const CounselingForm: React.FC<CounselingFormPropsType> = (props) => {

    // const {
    //     control,
    //     watch,
    // } = useForm()

    return (
        <div className="flex flex-col gap-3 w-full">
            <form
                className="grid grid-cols-2 gap-3 w-full"
            >
{/*                 <CusSelect 
                    name={undefined}
                    control={undefined}
                />
                <CusInput
                    name={undefined}
                    control={undefined}
                />
                <CusInput
                    name={undefined}
                    control={undefined}
                /> */}
            </form>
            <div className="flex w-full flex-row items-center justify-between">
                <Button
                    variant="shadow"
                    color="primary"
                    size="lg"
                    endContent={(
                      <Icon icon="solar:arrow-left-down-line-duotone" width="20" height="20" />
                    )}
                    className="h-14 rounded-3xl"
                >
                    درخواست مشاوره
                </Button>
                <Chip
                    startContent={(
                      <i className="bg-secondary flex items-center justify-center rounded-xl aspect-square h-10 w-10">
                        <Icon icon="" width="24" height="24" />
                      </i>
                    )}
                    className="h-14 rounded-3xl ps-2 pe-4 bg-default-100"
                >
                    <div className="flex items-center gap-5 font-medium text-xs">
                      <span>
                        زمان پاسخگویی شنبه تا چهارشنبه
                      </span>
                      <span>
                        از ساعت 09:00 تا 14:00
                      </span>
                    </div>
                </Chip>
            </div>
        </div>
    )
}
