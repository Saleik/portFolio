import {
    useCallback,
    useState
} from "react";

export function useModal(initial = false) {
    const [state, setState] = useState(initial)
    return [state, useCallback(() => setState(state => !state), [])]
}