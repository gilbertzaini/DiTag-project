import { Box, FormLabel, Input } from "@chakra-ui/react";
import React from "react";

const DeviceForm = () => {
  return (
<>
    <form action="localhost:8080/device/register">
        <Box>
            <FormLabel>

            </FormLabel>
            <Input name="user_id" readOnly/>
        </Box>
        <Box>
            <FormLabel>
                Name
            </FormLabel>
            <Input name="name" readOnly/>
        </Box>
        <Box>
            <FormLabel>
                Serial Number
            </FormLabel>
            <Input name="device_id" readOnly/>
        </Box>
    </form>
</>
    )
}

export default DeviceForm;