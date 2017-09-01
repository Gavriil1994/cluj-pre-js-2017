const Component = function (options = {}) {
    const arr = options.map(el => `
        <div class="content-box-fields">
            <fieldset class="content-box-evaluations content-box-evaluations-skin">
                ${DropdownSelector(el)}
            </fieldset>
        </div>
    `);
    
    return arr.join('');
};

const TechnicalAreaPicker = (options = {}) => Component(getTechnicalAreaData())