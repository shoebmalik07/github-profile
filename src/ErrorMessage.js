import { Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'

const ErrorMessage = ({ type = 'error', children }) => {
    return (
        <Alert status={type}>
            <AlertIcon />
            <AlertTitle>User Not Found</AlertTitle>

        </Alert>
    )
}
export default ErrorMessage; 