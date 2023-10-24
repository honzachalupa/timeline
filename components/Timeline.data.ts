import { EventBasic } from "@/types/event";
import moment from "moment";

const data: EventBasic[] = [
    {
        name: "Arab-Byzantine Wars",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("629-01-01"),
            unit: "date",
            reference: "birth-of-christ",
        },
        dateTo: {
            value: moment("1050-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Reconquista",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("711-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1492-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Goguryeo-Sui War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("598-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("614-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "An Lushan Rebellion",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("755-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("763-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Goryeo-Khitan Wars",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("993-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1019-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Song-Vietnamese war",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1075-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1077-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Crusades",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1095-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1291-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Albigensian Crusade",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1208-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1229-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Mongol conquests",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1206-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1368-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Wars of Scottish Independence",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1296-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1357-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Hundred Years' War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1337-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1453-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Conquests of Timur",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1370-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1405-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Wars of the Roses",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1455-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1487-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Birth of Jesus",
        category: "religion",
        tags: ["jesus", "christianity"],
        dateFrom: {
            value: -7,
            unit: "years",
            reference: "birth-of-christ",
        },
        dateTo: {
            value: -1,
            unit: "years",
            reference: "birth-of-christ",
        },
    },
    {
        name: "Death of Jesus",
        category: "religion",
        tags: ["jesus", "christianity"],
        dateFrom: {
            value: 30,
            unit: "years",
            reference: "birth-of-christ",
        },
        dateTo: {
            value: 33,
            unit: "years",
            reference: "birth-of-christ",
        },
    },
    {
        name: "Thirty Years' War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1618-05-23"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1648-05-15"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Origins of Czechoslovakia",
        category: "czech-republic",
        tags: [],
        date: {
            value: moment("1918-10-28"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Italian Wars",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1494-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1559-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Spanish conquest of the Aztec Empire",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1519-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1632-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Spanish conquest of Yucatán",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1519-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1595-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Spanish conquest of the Inca Empire",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1533-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1572-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Campaigns of Suleiman the Magnificent",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1521-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1566-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "German Peasants' War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1524-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1525-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "French Wars of Religion",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1562-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1598-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Eighty Years' War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1568-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1648-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Anglo-Spanish War (1585-1604)",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1585-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1604-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Japanese invasions of Korea",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1592-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1598-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Transition from Ming to Qing",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1616-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1683-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Thirty Years' War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1618-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1648-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Franco-Spanish War (1635-59)",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1635-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1659-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Wars of the Three Kingdoms",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1639-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1651-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "English Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1642-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1651-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Mughal-Maratha Wars",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1658-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1707-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Franco-Dutch War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1672-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1678-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Great Turkish War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1683-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1699-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Great Northern War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1700-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1721-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "War of the Spanish Succession",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1701-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1714-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Maratha expeditions in Bengal",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1741-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1751-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Seven Years' War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1756-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1763-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Sino-Burmese War (1765-69)",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1765-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1769-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Tây Sơn rebellion",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1771-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1802-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "American Revolutionary War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1775-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1783-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "White Lotus Rebellion",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1794-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1804-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "French campaign in Egypt and Syria",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1798-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1801-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Saint-Domingue expedition",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1802-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1803-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Napoleonic Wars",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1803-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1815-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "French invasion of Russia",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1812-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1812-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Spanish American Wars of Independence",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1808-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1833-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Venezuelan War of Independence",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1810-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1823-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Mfecane",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1815-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1840-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Carlist Wars",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1820-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1876-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Greek War of Independence",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1821-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1831-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "French conquest of Algeria",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1830-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1903-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Taiping Rebellion",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1850-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1864-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Crimean War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1853-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1856-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Red Turban Rebellion (1854-1856)",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1854-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1856-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Miao Rebellion",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1854-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1873-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Punti-Hakka Clan Wars",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1855-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1868-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Panthay Rebellion",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1856-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1873-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Indian Rebellion of 1857",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1857-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1858-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "American Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1861-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1865-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Dungan Revolt",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1862-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1877-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "French intervention in Mexico",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1862-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1867-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Paraguayan War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1864-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1870-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Austro-Prussian War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1866-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1866-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Ten Years' War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1868-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1878-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Franco-Prussian War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1870-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1871-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Conquest of the Desert",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1870-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1884-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Aceh War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1873-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1914-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "First Sino-Japanese War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1894-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1895-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Cuban War of Independence",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1895-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1898-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Thousand Days' War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1899-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1902-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Boxer Rebellion",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1899-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1901-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "South African War (Second Boer War)",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1899-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1902-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Philippine-American War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1899-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1912-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Russo-Japanese War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1904-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1905-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Mexican Revolution",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1910-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1920-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "1911 Revolution",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1911-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1911-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Balkan Wars",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1912-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1913-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "World War I",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1914-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1918-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Russian Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1917-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1922-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Kurdish separatism in Iran",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1918-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Iraqi-Kurdish conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1918-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2003-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Rif War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1921-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1926-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Kurdish rebellions in Turkey",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1921-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Second Italo-Senussi War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1923-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1932-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Chinese Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1927-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1949-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Chaco War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1932-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1935-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Second Italo-Ethiopian War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1935-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1936-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Spanish Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1936-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1939-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Second Sino-Japanese War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1937-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1945-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "World War II",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1939-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1945-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Winter War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1939-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1940-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Greco-Italian War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1940-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1941-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Continuation War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1941-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1944-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Soviet-Japanese War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1945-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1945-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "First Indochina War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1946-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1954-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Greek Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1946-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1949-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Malagasy Uprising",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1947-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1948-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Kashmir Conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1947-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "La Violencia",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1948-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1958-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Internal conflict in Myanmar",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1948-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Arab-Israeli conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1948-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Indian annexation of Hyderabad",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1948-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1948-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Korean War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1950-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1953-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Algerian War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1954-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1962-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Ethnic conflict in Nagaland",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1954-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Vietnam War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1955-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1975-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "First Sudanese Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1955-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1972-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Congo Crisis",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1960-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1965-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Angolan War of Independence",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1961-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1974-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "North Yemen Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1962-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1970-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Mozambican War of Independence",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1964-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1974-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Insurgency in Northeast India",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1964-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Colombian conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1964-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Nigerian Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1967-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1970-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Moro Conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1969-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2019-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Communist rebellion in the Philippines",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1969-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Bangladesh Liberation War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1971-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1971-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Ethiopian Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1974-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1991-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Angolan Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1975-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2002-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Lebanese Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1975-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1990-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Insurgency in Laos",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1975-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2007-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Afghanistan conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1978-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Kurdish-Turkish conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1978-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Soviet-Afghan War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1979-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1989-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Salvadoran Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1979-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1992-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Iran-Iraq War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1980-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1988-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Internal conflict in Peru",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1980-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Ugandan Bush War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1981-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1986-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Second Sudanese Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1983-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2005-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Sri Lankan Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1983-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2009-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Somali Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1986-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Lord's Resistance Army insurgency",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1987-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Nagorno-Karabakh conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1988-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Gulf War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1990-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1991-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Algerian Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1991-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2002-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Bosnian War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1991-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1995-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "1991 Iraqi uprisings",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1991-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1991-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Sierra Leone Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1991-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2002-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Burundian Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1993-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2005-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Rwandan genocide",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1994-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1994-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "First Congo War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1996-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1997-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Second Congo War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1998-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2003-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Ituri conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1999-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2003-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "War on Terror",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2001-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "War in Afghanistan (2001-2021)",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2001-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Iraq War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2003-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2011-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "War in Darfur",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2003-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Kivu Conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2004-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "War in North-West Pakistan",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2004-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2017-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Mexican Drug War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2006-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Boko Haram insurgency",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2009-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Syrian Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2011-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Rojava-Islamist conflict",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2013-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Iraqi Civil War (2014-2017)",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2014-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("2017-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Yemeni Civil War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("2014-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment(),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "WWI",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1914-07-28"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1918-11-11"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "WWII",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1939-09-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1945-09-02"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Cold War",
        category: "war",
        tags: [],
        dateFrom: {
            value: moment("1947-01-01"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1991-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "První Československá republika",
        category: "czech-republic",
        tags: [],
        dateFrom: {
            value: moment("1918-10-28"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1938-09-30"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Protektorát Čechy a Morava",
        category: "czech-republic",
        tags: [],
        dateFrom: {
            value: moment("1939-03-14"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1945-05-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Communism",
        category: "czech-republic",
        tags: [],
        dateFrom: {
            value: moment("1946-05-26"),
            unit: "date",
            reference: "now",
        },
        dateTo: {
            value: moment("1989-11-17"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Origins of Czech Republic",
        category: "czech-republic",
        tags: [],
        date: {
            value: moment("1993-01-01"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "Birth of Jan Chalupa",
        category: "other",
        tags: [],
        date: {
            value: moment("1993-04-27"),
            unit: "date",
            reference: "now",
        },
    },
    {
        name: "9/11",
        category: "other",
        tags: [],
        date: {
            value: moment("2001-09-11"),
            unit: "date",
            reference: "now",
        },
    },
];

export default data;
