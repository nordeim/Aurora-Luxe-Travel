# Inventory of Available Skills & Tools

## 1. Standard Operational Tools
These are the core function calls available for direct execution.

### File System Operations
- **`list_directory`**: List contents of directories.
- **`read_file`**: Read file contents (supports pagination).
- **`write_file`**: Create or overwrite files.
- **`replace`**: Precision text replacement in files.
- **`glob`**: Pattern-based file finding.
- **`search_file_content`**: Fast content search (ripgrep).

### System & Network
- **`run_shell_command`**: Execute bash commands.
- **`web_fetch`**: Fetch and process content from URLs.
- **`google_web_search`**: Perform Google searches.
- **`save_memory`**: Persist user-specific facts for long-term memory.

### Browser Automation (Headless)
- **Navigation**: `navigate_page`, `new_page`, `close_page`, `select_page`, `list_pages`.
- **Interaction**: `click`, `fill`, `fill_form`, `press_key`, `hover`, `drag`, `upload_file`.
- **Analysis**: `take_screenshot`, `take_snapshot` (accessibility tree), `evaluate_script`.
- **Debugging**: `list_console_messages`, `list_network_requests`, `get_console_message`, `get_network_request`.
- **Performance**: `performance_start_trace`, `performance_stop_trace`, `performance_analyze_insight`.

### Documentation & Libraries
- **`resolve-library-id`**: Resolve package names to Context7 library IDs.
- **`query-docs`**: Query up-to-date documentation for libraries.

### Agent Coordination
- **`delegate_to_agent`**: Delegate complex tasks to specialized sub-agents.
- **`activate_skill`**: Activate specialized skills (if available in context).

---

## 2. Active Sub-Agents
Specialized agents available via delegation.

- **`codebase_investigator`**:
  - *Capabilities*: Codebase analysis, architectural mapping, dependency tracking, root-cause analysis.
  - *Use Case*: "Understand how X works", "Find the root cause of bug Y", "Map the project architecture".

- **`cli_help`**:
  - *Capabilities*: Explaining Gemini CLI features, documentation, and runtime configuration.
  - *Use Case*: "How do I use the browser tools?", "What is your memory limit?".

---

## 3. Active Persona & Role
**Current Role**: Frontend Architect & Avant-Garde UI Designer (defined in `GEMINI.md`)

- **Expertise**:
  - PHP 8.3+, Laravel 12, Ruby on Rails, Django 6.0.
  - Next.js 14+ (App Router), Tailwind CSS 4.0, Shadcn-UI.
  - Visual Hierarchy, Whitespace, UX Engineering.
- **Methodology**:
  - **Meticulous Approach**: Analyze -> Plan -> Validate -> Implement -> Verify -> Deliver.
  - **Anti-Generic Philosophy**: Rejection of templates/AI slop; focus on bespoke, intentional minimalism ("Celestial Noir" aesthetic).

---

## 4. Persona Library (Inactive/Backup)
These definitions exist in `.gemini/bak.agents/` and can be referenced for specialized role-playing.

| Category | Agent / Persona |
|----------|-----------------|
| **Development** | `backend-specialist`, `frontend-specialist`, `mobile-developer`, `game-developer`, `database-architect` |
| **Operations** | `devops-engineer`, `security-auditor`, `penetration-tester`, `performance-optimizer` |
| **Product** | `product-manager`, `product-owner`, `project-planner` |
| **QA & Analysis** | `test-engineer`, `qa-automation-engineer`, `code-archaeologist`, `debugger` |
| **Support** | `documentation-writer`, `seo-specialist`, `orchestrator`, `explorer-agent` |

---

## 5. Project Scripts
Located in `.gemini/.shared/ui-ux-pro-max/scripts/`.

- **`core.py`**: Core utility functions.
- **`design_system.py`**: Likely handles design token generation or validation.
- **`search.py`**: Custom search utility.

---

## 6. Knowledge Base (Contextual Memory)
Key documentation files loaded into current context or available in the project.

- **`TAILWIND_V4_0_COMPREHENSIVE_GUIDE.md`**: Authoritative guide on Tailwind v4 migration, mobile nav patterns, and debugging.
- **`PROJECT_ARCHITECTURE_DOCUMENT.md`**: System architecture and design patterns.
- **`MASTER_EXECUTION_PLAN.md`**: Development roadmap and status.
- **`PRD_*.md`**: Product Requirement Documents (Versions 1-5, G).
- **`CLAUDE.md`**: Project briefing and onboarding guide.
- **`GEMINI.md`**: Agent operational protocols and persona definition.
