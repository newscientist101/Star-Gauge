const poemVersions = {
    'Wikipedia': {
        gridData: [
            ['琴', '清', '流', '楚', '激', '弦', '商', '秦', '曲', '發', '聲', '悲', '摧', '藏', '音', '和', '詠', '思', '惟', '空', '堂', '心', '憂', '增', '慕', '懷', '慘', '傷', '仁'],
            ['芳', '廊', '東', '步', '階', '西', '遊', '王', '姿', '淑', '窈', '窕', '伯', '邵', '南', '周', '風', '興', '自', '后', '妃', '荒', '經', '離', '所', '懷', '歎', '嗟', '智'],
            ['蘭', '休', '桃', '林', '陰', '翳', '桑', '懷', '歸', '思', '廣', '河', '女', '衛', '鄭', '楚', '樊', '厲', '節', '中', '闈', '淫', '遐', '曠', '路', '傷', '中', '情', '懷'],
            ['凋', '翔', '飛', '燕', '巢', '雙', '鳩', '土', '迤', '逶', '路', '遐', '志', '詠', '歌', '長', '嘆', '不', '能', '奮', '飛', '妄', '清', '幃', '房', '君', '無', '家', '德'],
            ['茂', '流', '泉', '清', '水', '激', '揚', '眷', '頎', '其', '人', '碩', '興', '齊', '商', '雙', '發', '歌', '我', '袞', '衣', '想', '華', '飾', '容', '朗', '鏡', '明', '聖'],
            ['熙', '長', '君', '思', '悲', '好', '仇', '舊', '蕤', '葳', '桀', '翠', '榮', '曜', '流', '華', '觀', '冶', '容', '為', '誰', '感', '英', '曜', '珠', '光', '紛', '葩', '虞'],
            ['陽', '愁', '嘆', '發', '容', '摧', '傷', '鄉', '悲', '情', '我', '感', '傷', '情', '徵', '宮', '羽', '同', '聲', '相', '追', '所', '多', '思', '感', '誰', '為', '榮', '唐'],
            ['春', '方', '殊', '離', '仁', '君', '榮', '身', '苦', '惟', '艱', '生', '患', '多', '殷', '憂', '纏', '情', '將', '如', '何', '欽', '蒼', '穹', '誓', '終', '篤', '志', '貞'],
            ['牆', '禽', '心', '濱', '均', '深', '身', '加', '懷', '憂', '是', '嬰', '藻', '文', '繁', '虎', '龍', '寧', '自', '感', '思', '岑', '形', '熒', '城', '榮', '明', '庭', '妙'],
            ['面', '伯', '改', '漢', '物', '日', '我', '兼', '思', '何', '漫', '漫', '榮', '曜', '華', '雕', '旌', '孜', '孜', '傷', '情', '幽', '未', '猶', '傾', '苟', '難', '闈', '顯'],
            ['殊', '在', '者', '之', '品', '潤', '乎', '愁', '苦', '艱', '是', '丁', '麗', '壯', '觀', '飾', '容', '側', '君', '在', '時', '岩', '在', '炎', '在', '不', '受', '亂', '華'],
            ['意', '誠', '惑', '步', '育', '浸', '集', '悴', '我', '生', '何', '冤', '充', '顏', '曜', '繡', '衣', '夢', '想', '勞', '形', '峻', '慎', '盛', '戒', '義', '消', '作', '重'],
            ['感', '故', '暱', '飄', '施', '愆', '殃', '少', '章', '時', '桑', '詩', '端', '無', '終', '始', '詩', '仁', '顏', '貞', '寒', '嵯', '深', '興', '後', '姬', '源', '人', '榮'],
            ['故', '遺', '親', '飄', '生', '思', '愆', '精', '徽', '盛', '醫', '風', '比', '平', '始', '璇', '情', '賢', '喪', '物', '歲', '峨', '慮', '漸', '孽', '班', '禍', '讒', '章'],
            ['新', '舊', '聞', '離', '天', '罪', '辜', '神', '恨', '昭', '盛', '興', '作', '蘇', '心', '璣', '明', '別', '改', '知', '識', '深', '微', '至', '嬖', '女', '因', '奸', '臣'],
            ['霜', '廢', '遠', '微', '地', '積', '何', '遐', '微', '業', '孟', '鹿', '麗', '氏', '詩', '圖', '顯', '行', '華', '終', '凋', '淵', '察', '大', '趙', '婕', '所', '佞', '賢'],
            ['水', '故', '離', '隔', '德', '怨', '因', '幽', '元', '傾', '宣', '鳴', '辭', '理', '興', '義', '怨', '士', '容', '始', '松', '重', '遠', '伐', '氏', '好', '恃', '兇', '惟'],
            ['齊', '君', '殊', '喬', '貴', '其', '備', '曠', '悼', '思', '傷', '懷', '日', '往', '感', '年', '衰', '念', '是', '舊', '愆', '涯', '禍', '用', '飛', '辭', '恣', '害', '聖'],
            ['傑', '子', '我', '木', '平', '根', '當', '遠', '嘆', '水', '感', '悲', '思', '憂', '遠', '勞', '情', '誰', '為', '獨', '居', '經', '在', '昭', '燕', '輦', '極', '我', '配'],
            ['志', '惟', '同', '誰', '均', '難', '苦', '離', '戚', '戚', '情', '哀', '慕', '歲', '殊', '嘆', '時', '賤', '女', '懷', '歡', '網', '防', '青', '實', '漢', '驕', '忠', '英'],
            ['清', '新', '衾', '陰', '勻', '尋', '辛', '鳳', '知', '我', '者', '誰', '世', '異', '浮', '寄', '傾', '鄙', '賤', '何', '如', '羅', '萌', '青', '生', '成', '盈', '貞', '皇'],
            ['純', '貞', '志', '一', '專', '所', '當', '麟', '沙', '流', '頹', '逝', '異', '浮', '沉', '華', '英', '翳', '曜', '潛', '陽', '林', '西', '昭', '景', '薄', '榆', '桑', '倫'],
            ['望', '微', '精', '感', '通', '明', '神', '龍', '馳', '若', '然', '倏', '逝', '惟', '時', '年', '殊', '白', '日', '西', '移', '光', '滋', '愚', '讒', '漫', '頑', '凶', '匹'],
            ['誰', '雲', '浮', '寄', '身', '輕', '飛', '昭', '虧', '不', '盈', '無', '倏', '必', '盛', '有', '衰', '無', '日', '不', '陂', '流', '蒙', '謙', '退', '休', '孝', '慈', '離'],
            ['思', '輝', '光', '飭', '桀', '殊', '文', '德', '離', '忠', '體', '一', '達', '心', '意', '志', '殊', '憤', '激', '何', '施', '電', '疑', '危', '遠', '家', '和', '雍', '飄'],
            ['想', '群', '離', '散', '妾', '孤', '遺', '懷', '儀', '容', '仰', '俯', '榮', '華', '麗', '飾', '身', '將', '無', '誰', '為', '逝', '容', '節', '敦', '貞', '淑', '思', '浮'],
            ['懷', '悲', '哀', '聲', '殊', '乖', '分', '聖', '貲', '何', '情', '憂', '感', '惟', '哀', '志', '節', '上', '通', '神', '祇', '推', '持', '所', '貞', '記', '自', '恭', '江'],
            ['所', '春', '傷', '應', '翔', '雁', '歸', '皇', '辭', '成', '者', '作', '體', '下', '遺', '葑', '菲', '採', '者', '無', '差', '生', '從', '是', '敬', '孝', '為', '基', '湘'],
            ['親', '剛', '柔', '有', '女', '為', '賤', '人', '房', '幽', '處', '己', '憫', '微', '身', '長', '路', '悲', '曠', '感', '生', '民', '梁', '山', '殊', '塞', '隔', '河', '津']
        ]
    },
    'stargaugepoem.com': {
        gridData: [
            ['琴', '清', '流', '楚', '激', '弦', '商', '秦', '曲', '发', '声', '悲', '摧', '藏', '音', '和', '咏', '思', '惟', '空', '堂', '心', '忧', '增', '慕', '怀', '惨', '伤', '仁'],
            ['芳', '廊', '东', '步', '阶', '西', '游', '王', '姿', '淑', '窈', '窕', '伯', '邵', '南', '周', '风', '兴', '自', '后', '妃', '荒', '经', '离', '所', '怀', '叹', '嗟', '智'],
            ['兰', '休', '桃', '林', '阴', '翳', '桑', '怀', '归', '思', '广', '河', '女', '卫', '郑', '楚', '樊', '厉', '节', '中', '闱', '淫', '遐', '旷', '路', '伤', '中', '情', '怀'],
            ['凋', '翔', '飞', '燕', '巢', '双', '鸠', '土', '迤', '逶', '路', '遐', '志', '咏', '歌', '长', '叹', '不', '能', '奋', '飞', '妄', '清', '帏', '房', '君', '无', '家', '德'],
            ['茂', '流', '泉', '清', '水', '激', '扬', '眷', '颀', '其', '人', '硕', '兴', '齐', '商', '双', '发', '歌', '我', '衮', '衣', '想', '华', '饰', '容', '朗', '镜', '明', '圣'],
            ['熙', '长', '君', '思', '悲', '好', '仇', '旧', '蕤', '葳', '桀', '翠', '荣', '曜', '流', '华', '观', '冶', '容', '为', '谁', '感', '英', '曜', '珠', '光', '纷', '葩', '虞'],
            ['阳', '愁', '叹', '发', '容', '摧', '伤', '乡', '悲', '情', '我', '感', '伤', '情', '徵', '宫', '羽', '同', '声', '相', '追', '所', '多', '思', '感', '谁', '为', '荣', '唐'],
            ['春', '方', '殊', '离', '仁', '君', '荣', '身', '苦', '惟', '艰', '生', '患', '多', '殷', '忧', '缠', '情', '将', '如', '何', '钦', '苍', '穹', '誓', '终', '篤', '志', '贞'],
            ['墙', '禽', '心', '滨', '均', '深', '身', '加', '怀', '忧', '是', '婴', '藻', '文', '繁', '虎', '龙', '宁', '自', '感', '思', '岑', '形', '荧', '城', '荣', '明', '庭', '妙'],
            ['面', '伯', '改', '汉', '物', '日', '我', '兼', '思', '何', '漫', '漫', '荣', '曜', '华', '雕', '旌', '孜', '孜', '伤', '情', '幽', '未', '犹', '倾', '苟', '难', '闱', '显'],
            ['殊', '在', '者', '之', '品', '润', '乎', '愁', '苦', '艰', '是', '丁', '丽', '壮', '观', '饰', '容', '侧', '君', '在', '时', '岩', '在', '炎', '在', '不', '受', '乱', '华'],
            ['意', '诚', '惑', '步', '育', '浸', '集', '悴', '我', '生', '何', '冤', '充', '颜', '曜', '绣', '衣', '梦', '想', '劳', '形', '峻', '慎', '盛', '戒', '义', '消', '作', '重'],
            ['感', '故', '昵', '飘', '施', '愆', '殃', '少', '章', '时', '桑', '诗', '端', '无', '终', '始', '诗', '仁', '颜', '贞', '寒', '嵯', '深', '兴', '后', '姬', '源', '人', '荣'],
            ['故', '遗', '亲', '飘', '生', '思', '愆', '精', '徽', '盛', '医', '风', '比', '平', '始', '璇', '情', '贤', '丧', '物', '岁', '峨', '虑', '渐', '孽', '班', '祸', '谗', '章'],
            ['新', '旧', '闻', '离', '天', '罪', '辜', '神', '恨', '昭', '盛', '兴', '作', '苏', '心', '玑', '明', '别', '改', '知', '识', '深', '微', '至', '嬖', '女', '因', '奸', '臣'],
            ['霜', '废', '远', '微', '地', '积', '何', '遐', '微', '业', '孟', '鹿', '丽', '氏', '诗', '图', '显', '行', '华', '终', '凋', '渊', '察', '大', '赵', '婕', '所', '佞', '贤'],
            ['水', '故', '离', '隔', '德', '怨', '因', '幽', '元', '倾', '宣', '鸣', '辞', '理', '兴', '义', '怨', '士', '容', '始', '松', '重', '远', '伐', '氏', '好', '恃', '凶', '惟'],
            ['齐', '君', '殊', '乔', '贵', '其', '备', '旷', '悼', '思', '伤', '怀', '日', '往', '感', '年', '衰', '念', '是', '旧', '愆', '涯', '祸', '用', '飞', '辞', '恣', '害', '圣'],
            ['杰', '子', '我', '木', '平', '根', '当', '远', '叹', '水', '感', '悲', '思', '忧', '远', '劳', '情', '谁', '为', '独', '居', '经', '在', '昭', '燕', '辇', '极', '我', '配'],
            ['志', '惟', '同', '谁', '均', '难', '苦', '离', '戚', '戚', '情', '哀', '慕', '岁', '殊', '叹', '时', '贱', '女', '怀', '欢', '网', '防', '青', '实', '汉', '骄', '忠', '英'],
            ['清', '新', '衾', '阴', '匀', '寻', '辛', '凤', '知', '我', '者', '谁', '世', '异', '浮', '寄', '倾', '鄙', '贱', '何', '如', '罗', '萌', '青', '生', '成', '盈', '贞', '皇'],
            ['纯', '贞', '志', '一', '专', '所', '当', '麟', '沙', '流', '颓', '逝', '异', '浮', '沉', '华', '英', '翳', '曜', '潜', '阳', '林', '西', '昭', '景', '薄', '榆', '桑', '伦'],
            ['望', '微', '精', '感', '通', '明', '神', '龙', '驰', '若', '然', '倏', '逝', '惟', '时', '年', '殊', '白', '日', '西', '移', '光', '滋', '愚', '谗', '漫', '顽', '凶', '匹'],
            ['谁', '云', '浮', '寄', '身', '轻', '飞', '昭', '亏', '不', '盈', '无', '倏', '必', '盛', '有', '衰', '无', '日', '不', '陂', '流', '蒙', '谦', '退', '休', '孝', '慈', '离'],
            ['思', '辉', '光', '饬', '桀', '殊', '文', '德', '离', '忠', '体', '一', '达', '心', '意', '志', '殊', '愤', '激', '何', '施', '电', '疑', '危', '远', '家', '和', '雍', '飘'],
            ['想', '群', '离', '散', '妾', '孤', '遗', '怀', '仪', '容', '仰', '俯', '荣', '华', '丽', '饰', '身', '将', '无', '谁', '为', '逝', '容', '节', '敦', '贞', '淑', '思', '浮'],
            ['怀', '悲', '哀', '声', '殊', '乖', '分', '圣', '赀', '何', '情', '忧', '感', '惟', '哀', '志', '节', '上', '通', '神', '祇', '推', '持', '所', '贞', '记', '自', '恭', '江'],
            ['所', '春', '伤', '应', '翔', '雁', '归', '皇', '辞', '成', '者', '作', '体', '下', '遗', '葑', '菲', '采', '者', '无', '差', '生', '从', '是', '敬', '孝', '为', '基', '湘'],
            ['亲', '刚', '柔', '有', '女', '为', '贱', '人', '房', '幽', '处', '己', '悯', '微', '身', '长', '路', '悲', '旷', '感', '生', '民', '梁', '山', '殊', '塞', '隔', '河', '津']
        ]
    }
};

function getCharColor(row, col) {
    // Red
    if (row === 0 || row === 28 || col === 0 || col === 28 ||
        row === 7 || row === 21 || col === 7 || col === 21 ||
        (row === 14 && col === 14)) {
        return 'red';
    }

    // Black
    if ((row >= 1 && row <= 6 && col >= 1 && col <= 6) ||      // Top-left
        (row >= 1 && row <= 6 && col >= 22 && col <= 27) ||     // Top-right
        (row >= 22 && row <= 27 && col >= 1 && col <= 6) ||     // Bottom-left
        (row >= 22 && row <= 27 && col >= 22 && col <= 27)) {   // Bottom-right
        return 'black';
    }

    // Green
    if (row >= 13 && row <= 15 && col >= 13 && col <= 15) {
        return 'green';
    }

    // Yellow
    if ( // Central 5x5 box
        (row >= 12 && row <= 16 && col >= 12 && col <= 16) ||
        // Top-left 4x4 box
        (row >= 8 && row <= 11 && col >= 8 && col <= 11) ||
        // Top-right 4x4 box
        (row >= 8 && row <= 11 && col >= 17 && col <= 20) ||
        // Bottom-left 4x4 box
        (row >= 17 && row <= 20 && col >= 8 && col <= 11) ||
        // Bottom-right 4x4 box
        (row >= 17 && row <= 20 && col >= 17 && col <= 20)) {
        return 'yellow';
    }

    // Purple
    if ((row >= 8 && row <= 11 && col >= 12 && col <= 16) ||
        (row >= 17 && row <= 20 && col >= 12 && col <= 16) ||
        (row >= 12 && row <= 16 && col >= 8 && col <= 11) ||
        (row >= 12 && row <= 16 && col >= 17 && col <= 20)) {
        return 'purple';
    }

    // Blue
    return 'blue';
}

function generateGrid(version = poemVersions['stargaugepoem.com'].gridData) {
    const gridElement = document.getElementById('grid');
    gridElement.innerHTML = ''; // Clear existing grid
    version.forEach((row, rowIndex) => {
        row.forEach((char, colIndex) => {
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            cell.textContent = char;
            cell.dataset.row = rowIndex;
            cell.dataset.col = colIndex;

            const colorClass = getCharColor(rowIndex, colIndex);
            if (colorClass) {
                cell.classList.add(colorClass);
            }

            gridElement.appendChild(cell);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    generateGrid();

    // --- Settings Modal Logic (unchanged) ---
    const settingsModal = document.getElementById('settings-modal');
    const settingsBtn = document.getElementById('settings-btn');
    const closeBtn = document.querySelector('.close-btn');
    const saveApiKeyBtn = document.getElementById('save-api-key-btn');
    const apiKeyInput = document.getElementById('api-key-input');

    const savedApiKey = localStorage.getItem('googleApiKey');
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
    }

    settingsBtn.onclick = () => { settingsModal.style.display = "block"; };
    closeBtn.onclick = () => { settingsModal.style.display = "none"; };
    window.onclick = (event) => {
        if (event.target == settingsModal) {
            settingsModal.style.display = "none";
        }
    };
    saveApiKeyBtn.onclick = () => {
        const apiKey = apiKeyInput.value.trim();
        if (apiKey) {
            localStorage.setItem('googleApiKey', apiKey);
            alert('API Key saved successfully!');
            settingsModal.style.display = "none";
        } else {
            alert('API Key field cannot be empty.');
        }
    };

    // --- Dynamic Poem Generation Logic ---
    const poemSelect = document.getElementById('poem-select');
    const versionSelect = document.getElementById('version-select');
    const poemDisplay = document.getElementById('poem-display');
    const gridElement = document.getElementById('grid');
    const explanationDiv = document.getElementById('rule-explanation');

    function updateExplanation() {
        const selectedMethod = poemSelect.value;
        const rule = poemRules[selectedMethod];
        if (rule && rule.description) {
            explanationDiv.textContent = rule.description;
        } else {
            explanationDiv.textContent = '';
        }
    }

    function updateGridVersion() {
        const selectedVersion = versionSelect.value;
        const versionData = poemVersions[selectedVersion].gridData;
        generateGrid(versionData);
    }

    function populatePoemSelector() {
        poemSelect.innerHTML = ''; // Clear existing options
        for (const methodName in poemRules) {
            const option = document.createElement('option');
            option.textContent = methodName;
            option.value = methodName;
            poemSelect.appendChild(option);
        }
    }

    function populateVersionSelector() {
        versionSelect.innerHTML = '';
        for (const version in poemVersions) {
            const option = document.createElement('option');
            option.textContent = version;
            option.value = version;
            versionSelect.appendChild(option);
        }
    }

    populatePoemSelector();
    populateVersionSelector();
    updateExplanation(); // Initial call to display description for the default selection
    updateGridVersion(); // Initial call to set the default grid version
    
    poemSelect.addEventListener('change', updateExplanation);
    versionSelect.addEventListener('change', updateGridVersion);

    gridElement.addEventListener('click', (event) => {
        if (!event.target.classList.contains('grid-cell')) return;

        const row = parseInt(event.target.dataset.row, 10);
        const col = parseInt(event.target.dataset.col, 10);
        const selectedMethod = poemSelect.value;
        const rule = poemRules[selectedMethod];

        if (rule && rule.isValidStart(row, col)) {
            const path = rule.getPath(row, col);
            generatePoemFromPath(path);
        }
    });

    const translateBtn = document.getElementById('translate-btn');
    const translationDisplay = document.getElementById('translation-display');

    translateBtn.onclick = async () => {
        const poemText = poemDisplay.textContent;
        if (!poemText) {
            translationDisplay.textContent = 'First, generate a poem to translate.';
            return;
        }
        const apiKey = localStorage.getItem('googleApiKey');
        if (!apiKey) {
            translationDisplay.textContent = 'Please save your API key in the settings menu first.';
            return;
        }
        translationDisplay.textContent = 'Translating...';
        const translatedText = await translateText(poemText, apiKey);
        translationDisplay.textContent = translatedText;
    };
});

function generatePoemFromPath(path) {
    const poemDisplay = document.getElementById('poem-display');
    const versionSelect = document.getElementById('version-select');
    if (!path) {
        poemDisplay.textContent = "Invalid path.";
        return;
    }

    // Clear previous highlights
    document.querySelectorAll('.grid-cell.selected').forEach(cell => {
        cell.classList.remove('selected');
    });

    let poemText = '';

    path.forEach(segment => {
        let [row, col] = segment.start;
        for (let i = 0; i < segment.length; i++) {
            let currentRow = row, currentCol = col;
            let cellToHighlight;

            switch (segment.direction) {
                case 'down': currentRow += i; break;
                case 'up': currentRow -= i; break;
                case 'left': currentCol -= i; break;
                case 'right': currentCol += i; break;
            }

            // Check boundaries
            if (currentRow >= 0 && currentRow < 29 && currentCol >= 0 && currentCol < 29) {
                poemText += poemVersions[versionSelect.value].gridData[currentRow][currentCol];
                cellToHighlight = document.querySelector(`.grid-cell[data-row="${currentRow}"][data-col="${currentCol}"]`);
                if (cellToHighlight) {
                    cellToHighlight.classList.add('selected');
                }
            }
        }
    });

    // Add formatting
    const lines = [];
    const lineLength = 7;
    for (let i = 0; i < poemText.length; i += lineLength) {
        lines.push(poemText.substring(i, i + lineLength));
    }
    poemDisplay.textContent = lines.join('\n');
}


async function translateText(text, apiKey) {
    const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;
    const body = { q: text, target: 'en', source: 'zh' };
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        });
        if (!response.ok) {
            const errorData = await response.json();
            console.error('Translation API Error:', errorData);
            return `Translation failed: ${errorData.error.message}`;
        }
        const data = await response.json();
        const translatedText = data.data.translations[0].translatedText;
        const decodedText = new DOMParser().parseFromString(translatedText, "text/html").documentElement.textContent;
        return decodedText;
    } catch (error) {
        console.error('Network error during translation:', error);
        return 'Error: Could not connect to the translation service.';
    }
}
