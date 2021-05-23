import React from 'react'

const SectionWrap = ({sectionClass, addContainerClasses, children}) => {

    let containerClasses = 'container';

    if(addContainerClasses) {
        containerClasses += ` ${addContainerClasses}`;
    }

    return (
        <section className={sectionClass}>
            <div className={containerClasses}>
                {children}
            </div>
        </section>
    )
}

export default SectionWrap;