/********************************************************************************
 * Copyright (c) 2023 Business Informatics Group (TU Wien) and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 ********************************************************************************/
import type { PageIntegrationOptions } from './page';
import type { StandaloneIntegrationOptions } from './standalone';
import type { TheiaIntegrationOptions } from './theia';
import type { VSCodeIntegrationOptions } from './vscode';

export type IntegrationType = 'Page' | 'Standalone' | 'Theia' | 'VSCode';

export interface BaseIntegrationOptions {
    type: IntegrationType;
}

export type IntegrationOptions = PageIntegrationOptions | StandaloneIntegrationOptions | TheiaIntegrationOptions | VSCodeIntegrationOptions;
