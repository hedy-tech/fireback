// Type definitions for @hedy-tech/fireback
// Project: Firebase backend service
// Definitions by: Joao Correia https://hedy.tech
declare global {
    // eslint-disable-next-line no-var
    var firebackGlobalCache: Record<
        'modules' | 'values',
        Record<string, unknown>
    >
}

export {}
